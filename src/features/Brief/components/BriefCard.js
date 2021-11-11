import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
export default function MultiActionAreaCard(props) {
  console.log(props);
  return (
    <Card style={{ textAlign: "left", padding: "1em" }} >
      <Typography variant="h5" component="p">
        {props.title}
      </Typography>
      <Typography color="text.secondary" component="p">
        {props.comment}
      </Typography>

      <Button size="small">{props.product.name}</Button>
    </Card>
  );
}
