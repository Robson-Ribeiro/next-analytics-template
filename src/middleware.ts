import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";

export default async function analyticsMiddleware(req: NextRequest) {
    if(req.nextUrl.pathname === '/') {
        // Track logic
        try {
            //analytics.register(data)
        } catch (error) {
            console.log(error)
        }
        console.log("Tracking the route /")
    } else if (req.nextUrl.pathname === "/analytics") {
        console.log("You are in analytics")
    } else {
        console.log("Untracked")
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/analytics/', '/generic/'],
}
