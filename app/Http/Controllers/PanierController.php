<?php

namespace App\Http\Controllers;

use App\Models\like;
use Illuminate\Http\Request;
use App\Models\Panier;
use App\Models\Panier_produit;
use App\Models\Product;

class PanierController extends Controller
{
    // Afficher le panier d'un client
    public function afficherPanier($id_client)
    {
        $panier = Panier::where('id_client', $id_client)->first();
        // Vérifier si le panier existe
        if (!$panier) {
            return response()->json(['message' => 'Panier introuvable'], 404);
        }
        $produitsDuPanier = $panier->panierProduits;
        return response()->json(['panier' => $panier, 'produits' => $produitsDuPanier]);
    }

    // Ajouter un produit au panier
    public function ajouterProduit(Request $request)
    {
        $request->validate([
            'id_client' => 'required',
            'id_produit' => 'required',
            'quantite' => 'required|integer|min:1',
        ]);

        // Recherche du panier en fonction de l'ID du client
        $panier = Panier::where('id_client', $request->id_client)->first();

        // Vérifier si le panier existe
        if (!$panier) {
            return response()->json(['message' => 'Panier introuvable'], 404);
        }

        // Recherche du produit en fonction de son ID
        $produit = Product::find($request->id_produit);
        // Vérifier si le produit existe
        if (!$produit) {
            return response()->json(['message' => 'Produit introuvable'], 404);
        }

        // Création d'une nouvelle instance de PanierProduit
        $panierProduit = new Panier_produit();
        $panierProduit->id_panier = $panier->id;
        $panierProduit->id_produit = $produit->id;
        $panierProduit->quantite = $request->quantite;
        $panierProduit->save();

        // Mettre à jour le total du panier
        $panier->total += $produit->prix * $request->quantite;
        $panier->save();

        return response()->json(['message' => 'Produit ajouté au panier avec succès']);
    }
    public function ajouterlike(Request $request)
    {
        Product::find($request->id_pr)->increment('likes_count');

    }

    // Supprimer un produit du panier
    public function supprimerProduit($idPanierProduit)
    {
        $panierProduit = Panier_produit::find($idPanierProduit);
        // Vérifier si le panierProduit existe
        if (!$panierProduit) {
            return response()->json(['message' => 'Produit du panier introuvable'], 404);
        }

        $panier = $panierProduit->panier;
        // Mettre à jour le total du panier
        $panier->total -= $panierProduit->product->prix * $panierProduit->quantite;
        $panier->save();

        $panierProduit->delete();

        return response()->json(['message' => 'Produit du panier supprimé avec succès']);
    }
}
