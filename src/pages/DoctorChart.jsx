import { useLoaderData, useParams } from "react-router";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from "recharts";
const TriangleBar = ({ fill, x, y, width, height }) => (
    <path
    d={`M${x},${y + height}
        L${x + width / 2},${y}
        L${x + width},${y + height}
        Z`}
        fill={fill}
        />
    );
const DoctorBarChart = () => {
    const {id} = useParams()
    const datas = useLoaderData()
    console.log(datas)
     const data = datas.filter(doctor => doctor.id !== parseInt(id));
 

    
        return (
            <div className="w-full h-80">
            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar
                        dataKey="price"
                        shape={<TriangleBar />}
                        fill="#3b82f6"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DoctorBarChart;

