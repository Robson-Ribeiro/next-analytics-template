const AnalyticsDashboard = () => {
    return (
        <div className="flex flex-col h-full justify-around gap-9 text-black">
            <div className="w-full h-full flex flex-row justify-around gap-7">
                <div className="h-full w-full backdrop-blur-md bg-white/30">
                    <p>Visitors today</p>
                    <p>15</p>
                </div>
                <div className="h-full w-full backdrop-blur-md bg-white/30">
                    <p>Avarage number of visitors in the last 10 days</p>
                    <p>7</p>
                </div>
            </div>
            <div>
                <div className="bg-white w-full h-20">Tremor Graph</div>
            </div>
        </div>
    )
}
export default AnalyticsDashboard