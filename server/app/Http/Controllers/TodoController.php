<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;

class TodoController extends Controller
{
    public function index(){
        return Todo::all();
    }

    // public function create(){

    // }

    public function store(Request $request){
        // return ($request->content);
        // $todo = new Todo;
        // $todo->content = $request->content;
        // $todo->save();
        return Todo::create($request->all());
    }

    // public function update(Request $request){

    // }

    public function delete(Request $request){
        $todo = Todo::findOrFail($request->id);
        $todo->delete();
        return ('204');
    }
}
