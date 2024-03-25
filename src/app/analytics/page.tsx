import AnalyticsDashboard from "@/components/AnalyticsDashboard"

const Page = () => {
    return (
        <div className="min-h-screen w-full p-12 flex justify-center items-center">
            <div className="relative w-full h-fit max-w-6x1 mx-auto text-white">
                <AnalyticsDashboard />
            </div>
        </div>
    )
}

export default Page