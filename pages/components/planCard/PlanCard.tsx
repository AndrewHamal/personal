import { CheckCircleTwoTone } from "@ant-design/icons";
import { Card, CardContent, Typography } from "@mui/material";
import { fontFamily } from "@mui/system";
import React from "react";

interface PlanCardProps {
    price: string,
    title?: string,
    features: string[],
    handleClick: (id: number) => void,
    id: number
}

export default function PlanCard({ price, title, features, handleClick, id }: PlanCardProps) {
    return (
        <Card className="m-2 p-2 plan-card">
            <CardContent>
                <div className="h-[100px]">
                    <Typography variant="h1">{price}</Typography>
                    {title && <Typography variant="h2">{title}</Typography>}
                </div>
                <div className="h-[120px] mt-2">
                    {features && features.map(item => (
                        <div className="d-flex align-items-center gap-2"><CheckCircleTwoTone twoToneColor="#52c41a" />
                            <Typography sx={{
                                // fontFamily: 'SF Pro Display',
                                fontStyle: "normal",
                                fontSeight: 700,
                                fontSize: "18px",
                                lineHeight: "21px",
                                letterSpacing: "0.18px"
                            }}>{item}</Typography></div>
                    ))}
                </div>
                <button
                    className="btn btn-primary bg-dark"
                    onClick={() => handleClick(id)}
                >
                    Select plan
                </button>
            </CardContent>
        </Card>
    )
}