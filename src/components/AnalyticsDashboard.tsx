"use client";
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";
import { BarChart, DonutChart, Legend } from "@tremor/react";

const dataForTest = [
    {
      name: 'Segunda',
      value: 9800,
    },
    {
      name: 'Terça',
      value: 4567,
    },
    {
      name: 'Quarta',
      value: 3908,
    },
    {
      name: 'Quinta',
      value: 2400,
    },
    {
      name: 'Sexta',
      value: 2174,
    },
]

const AnalyticsDashboard = () => {

    const dataFormatter = (number: number) => {
        `$ ${Intl.NumberFormat('us').format(number).toString()}`;
    }

    return (
        <div className="flex flex-col h-full justify-around gap-9 text-black">
            <div className="flex items-center justify-center gap-40">
                <div className="flex items-center justify-center space-x-6">
                    <DonutChart 
                        data={dataForTest}
                        variant="pie"
                        valueFormatter={dataFormatter}
                        onValueChange={(v) => console.log(v)}
                    />
                    <Legend
                        categories={['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']}
                        colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                        className="max-w-xs"
                    />
                </div>
                <div className="w-full h-auto flex flex-col justify-around gap-7">
                    <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50 h-full w-full max-w-52" shadow="sm">
                        <CardHeader>
                            <p className="text-sm text-center">Visitors today</p>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p className="font-bold text-xl text-center">15</p>
                        </CardBody>
                    </Card>
                    <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50 h-full w-full max-w-52" shadow="sm">
                        <CardHeader>
                            <p className="text-sm text-center">Visitors in the last 7 days</p>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p className="font-bold text-xl text-center">7</p>
                        </CardBody>
                    </Card>
                    <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50 h-full w-full max-w-52" shadow="sm">
                        <CardHeader>
                            <p className="text-sm text-center">Avarage visitors per day in the last month</p>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p className="font-bold text-xl text-center">7</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
            
            <div>
            <Card>
                <BarChart
                    allowDecimals={false}
                    showAnimation
                    data={[{
                        name: "Segunda",
                        Visitors: 7,
                    },
                    {
                        name: "Terça",
                        Visitors: 3,
                    },
                    {
                        name: "Quarta",
                        Visitors: 10,
                    },
                    {
                        name: "Quinta",
                        Visitors: 10,
                    },
                    {
                        name: "Sexta",
                        Visitors: 10,
                    },
                    {
                        name: "Sábado",
                        Visitors: 10,
                    },
                    ]}
                    categories={['Visitors']}
                    index='name'
                />
            </Card>
            </div>
        </div>
    )
}
export default AnalyticsDashboard