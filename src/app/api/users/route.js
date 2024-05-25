import { NextResponse } from 'next/server'

// ROUTE HANDLER
export async function GET() {
    // Hacer mas funcinoes
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return NextResponse.json(data);
};


export async function POST(request){
    // const requestBody = await request.json();
    const {nombre, apellido} = await request.json();
    console.log(nombre, apellido);
    return NextResponse.json("Creando datos")
}

export function PUT() {
    // Hacer mas funcinoes

    return NextResponse.json({
        message: "Actualizando datos"
    });
}


export function DELETE() {
    // Hacer mas funcinoes

    return NextResponse.json({
        message: "Eliminando datos"
    });
}