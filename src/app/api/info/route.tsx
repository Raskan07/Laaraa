
import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = "https://maps.googleapis.com/maps/api/place/details/json";
const API_KEY  = 'AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const place_id = searchParams.get('place_id');

    const url = `${BASE_URL}?place_id=${place_id}&key=${API_KEY}`;
    const res = await fetch(url);
    const result = await res.json();
  return NextResponse.json({ message: 'Hello from your API route!',result });
}


//https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJPT-U4zwu4joRJmD2KIumxdM&key=AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc
