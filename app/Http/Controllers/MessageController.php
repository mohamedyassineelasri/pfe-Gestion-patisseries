<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Support\Facades\Mail;
use App\Mail\MessageReply;

class MessageController extends Controller
{
    public function index()
    {
        $messages = Message::latest()->paginate(10);
        return response()->json($messages);
    }

    public function show($id)
    {
        $message = Message::findOrFail($id);
        return response()->json($message);
    }

    public function reply(Request $request, $id)
    {
        $request->validate([
            'reply_content' => 'required|string',
        ]);

        $message = Message::findOrFail($id);

        // Envoyer un e-mail en réponse au message
        Mail::to($message->client->email)->send(new MessageReply($request->reply_content));

        // Autres actions possibles, comme mettre à jour le statut du message, etc.

        return response()->json(['message' => 'Reply sent successfully']);
    }
    public function ajouterMessage(Request $request)
    {
        // Validation des données de la requête
        $request->validate([
            'contenu' => 'required|string',
            'type' => 'required|string',
            'status' => 'required',
            'client_id' => 'required',
        ]);

        // Création d'un nouveau message
        $message = new Message();
        $message->contenu = $request->contenu;
        $message->type = $request->type;
        $message->status = $request->status;
        $message->client_id = $request->client_id;
        $message->save();

        // Répondre avec un message de succès
        return response()->json(['message' => 'Message ajouté avec succès'], 200);
    }
}
