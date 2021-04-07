import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import { getAllByPlaceholderText } from "@testing-library/react";
import Button from "../components/Button";
import Input from "../components/Input";
import "./Onboard.scss";

function Onboard(props) {
  return (
    <main className='onboard'>
      <section className='onboard__section'>
        <svg
          viewBox='0 0 96 96'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='onboard__logo'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M48 24C34.7452 24 24 34.7451 24 48C24 61.2548 34.7452 72 48 72H72V48C72 34.7451 61.2548 24 48 24ZM48 60C54.6274 60 60 54.6274 60 48C60 41.3726 54.6274 36 48 36C41.3726 36 36 41.3726 36 48C36 54.6274 41.3726 60 48 60Z'
            fill='#266BF2'
          />
          <path
            d='M90 48V72C90 81.9411 81.9411 90 72 90H48C24.804 90 6 71.196 6 48C6 24.804 24.804 6 48 6C71.196 6 90 24.804 90 48Z'
            stroke='#B7CEFB'
            strokeWidth='12'
          />
        </svg>

        <h2 className='onboard__h2'>Get insights for any tweet on Twitter.</h2>

        <p className='onboard__p'>
          Paste in a tweet URL, and get metrics about the tweet like the amount
          likes, retweets, replies, quotes, and more.
        </p>

        <Link to={"/get-started"}>
          <Button buttontype='primary'>Get started</Button>
        </Link>
      </section>
    </main>
  );
}

Onboard.propTypes = {};

export default Onboard;
