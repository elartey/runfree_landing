import React, { Fragment } from "react";
import { Container } from "reactstrap";
import terms from "../assets/terms";

const Terms = () => (
    <Fragment>
        <Container>
            <p className="display-4">Membership Application</p>
            <hr className="my-2" />
            <p className="font-weight-bold">Declaration:</p>
            <article className="text-muted small pb-3">{ terms.declaration.join('\n') }</article>

            <p className="font-weight-bold">Benefits:</p>
            <article className="text-muted small pb-3">{ terms.benefits.join('\n') }</article>

            <p className="font-weight-bold">Authorization:</p>
            <article className="text-muted small">{ terms.benefits.join('\n') }</article>

        </Container>
    </Fragment>
);

export default Terms;