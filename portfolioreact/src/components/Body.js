import React from "react";
import Styled from "styled-components";
import styles from "./Image.module.css";


function Body() {
    return (
    <div>
        <img className={styles.image} src="https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="computer"/>
    </div>
    )
}

export default Body;