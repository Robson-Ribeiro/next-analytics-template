import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";
import { getDate } from "./utils/index"

export default async function analyticsMiddleware(req: NextRequest) {
    if(req.nextUrl.pathname === '/') {
        try {
            analytics.register('home', getDate())
        } catch (error) {
            console.log(error)
        }
        console.log("Tracking the route /")
    } else if (req.nextUrl.pathname === "/analytics") {
        try {
            analytics.register('analytics', getDate())
        } catch (error) {
            console.log(error)
        }
        console.log("You are in analytics")
    } else {
        console.log("Untracked")
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/analytics/', '/generic/'],
}
