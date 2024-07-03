<?php

namespace App\Http\Controllers;

use App\Models\Commande;
use App\Models\Panier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommandeController extends Controller
{
    public function afficherCommandes()
    {
        // Récupérer toutes les commandes avec les relations chargées
        $commandes = Commande::with(['panier.panierProduits.product', 'panier.client'])->get();

        // Retourner les données sous forme de réponse JSON
        return response()->json(['commandes' => $commandes]);
    }


    
    
}
