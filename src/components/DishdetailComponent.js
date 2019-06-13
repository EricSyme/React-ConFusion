/* IMPORTS*/
import React from 'react';
import { Card, CardImg, CardText, CardBody,Breadcrumb, BreadcrumbItem, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


/*Render dish using dish passed in as props from the Menu component*/

    function RenderDish({dish}){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

/*Render comments using dish passed in as props from the Menu component*/
/* map thru array of dishes using props and set comment and details to 'comments'*/
    function RenderComments({comments}) {
        var comments = comments.map ((comments) => {
            return (
                <li style={{ listStyleType: "none"}} key={comments.id}>
                {comments.comment}<br/><br/>--{comments.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}<br/><br/>
                </li>
            );
        });

        if (comments != null){
            return(
                <div className = "col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments}
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }

    const DishDetail = (props) => {

        if (props.dish != null){
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }


export default DishDetail;