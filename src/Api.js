import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Loading from "./Loading";

import { toast } from 'react-toastify';


const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://picsum.photos/v2/list`)
      .then((res) => {
        setData(res.data);
        setLoading("Loading", true);
        toast.success("Data Loaded");
      })
      .then((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Api</h1>
      {loading ? (
        data.map((item) => (
          <div key={item.id} style={{float:"left"}}>
              <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.download_url} alt={item.author} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
         </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Api;
