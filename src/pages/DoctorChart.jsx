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
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`}
        fill={fill}
    />
);
const DoctorBarChart = () => {
    const { id } = useParams()
    const datas = useLoaderData()
    console.log(datas)
    const data = datas.filter(doctor => doctor.id !== parseInt(id));



    return (
        <div className="w-full h-100 bg-gray-100 my-8 p-8 rounded-sm">
            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar
                        dataKey="price"
                        shape={<TriangleBar />}
                        fill="#FFA000"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DoctorBarChart;

