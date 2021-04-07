import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import { getAllByPlaceholderText } from "@testing-library/react";
import { map, orderBy } from "lodash";
import * as TwitterAPI from "../assets/js/utils/TwitterAPI";
import Button from "../components/Button";
import Input from "../components/Input";
import "./Home.scss";

function Home(props) {
  return (
    <main className='home'>
      <header className='home__header'>
        <svg
          viewBox='0 0 102 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='home__logo'
        >
          <path
            d='M40.8523 10.5881H46.196V25H49.8438V10.5881H55.1875V7.54544H40.8523V10.5881Z'
            fill='#393939'
          />
          <path
            d='M58.0825 25H61.9177L64.1677 16.767H64.3297L66.5797 25H70.4234L73.9774 11.9091H70.3126L68.3183 20.6534H68.2075L66.0598 11.9091H62.4547L60.341 20.7045H60.2217L58.1933 11.9091H54.52L58.0825 25Z'
            fill='#393939'
          />
          <path
            d='M82.3973 11.9091H79.9342V8.77271H76.3035V11.9091H74.5137V14.6364H76.3035V21.4545C76.2865 24.0199 78.0336 25.2898 80.6672 25.179C81.6047 25.1449 82.2694 24.9574 82.6359 24.8381L82.0649 22.1364C81.8859 22.1704 81.5024 22.2557 81.1615 22.2557C80.437 22.2557 79.9342 21.9829 79.9342 20.9773V14.6364H82.3973V11.9091Z'
            fill='#393939'
          />
          <path
            d='M91.2454 11.9091H88.7823V8.77271H85.1516V11.9091H83.3619V14.6364H85.1516V21.4545C85.1346 24.0199 86.8818 25.2898 89.5153 25.179C90.4528 25.1449 91.1175 24.9574 91.484 24.8381L90.913 22.1364C90.734 22.1704 90.3505 22.2557 90.0096 22.2557C89.2852 22.2557 88.7823 21.9829 88.7823 20.9773V14.6364H91.2454V11.9091Z'
            fill='#393939'
          />
          <path
            d='M93.1304 25H96.7611V17.5937C96.7611 15.9829 97.9373 14.875 99.5395 14.875C100.042 14.875 100.733 14.9602 101.074 15.071V11.8494C100.75 11.7727 100.298 11.7216 99.9316 11.7216C98.4657 11.7216 97.264 12.5739 96.7867 14.1932H96.6503V11.9091H93.1304V25Z'
            fill='#393939'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24H24V16C24 11.5817 20.4183 8 16 8ZM15.9999 20C18.2091 20 20 18.2092 20 16C20 13.7909 18.2091 12 15.9999 12C13.7908 12 11.9999 13.7909 11.9999 16C11.9999 18.2092 13.7908 20 15.9999 20Z'
            fill='#266BF2'
          />
          <path
            d='M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16V24C30 27.3137 27.3137 30 24 30H16C8.26801 30 2 23.732 2 16Z'
            stroke='#B7CEFB'
            strokeWidth='4'
          />
        </svg>
      </header>
      <section className='home__section home__section--input'>
        <h2 className='home__h2'>First, let’s get a tweet.</h2>
        <p className='home__p'>
          Paste a tweet URL from Twitter, and get statistics and metrics about
          it.
        </p>
        <Input
          label='Tweet URL'
          placeholder=''
          className='home__input'
          onUpdate={props.searchTweets}
        />
        <Button buttontype='primary' full>
          Get statistics
        </Button>
      </section>
      <section className='home__section home__section--output'>
        <h3 className='home__h3'>Tweet</h3>
        <div className='home__card'>
          <div className='tweet'>
            <div className='tweet__author'>
              <div
                className='tweet__avatar'
                style={{
                  backgroundImage: `url()`,
                }}
              ></div>
              <div className='tweet__author-text'>
                <h4 className='tweet__name'></h4>
                <p className='tweet__username'>@</p>
              </div>
            </div>
            <div className='tweet__message'></div>
            <div className='tweet__timestamp'>
              {/* 1:29 AM · Apr 7, 2021 · Twitter for iPhone */}
            </div>
          </div>
        </div>
        <h3 className='home__h3'>Statistics</h3>
        <div className='home__card'>
          <h4 className="home__stat-property">Likes</h4>
          <p className="home__stat-value">220</p>
          
          <h4 className="home__stat-property">Retweets</h4>
          <p className="home__stat-value">220</p>

          <h4 className="home__stat-property">Replies</h4>
          <p className="home__stat-value">220</p>

          <h4 className="home__stat-property">Quotes</h4>
          <p className="home__stat-value">220</p>

          <h4 className="home__stat-property">Dated posted</h4>
          <p className="home__stat-value">07/01/2021</p>
        </div>
      </section>
    </main>
  );
}

Home.propTypes = {};

export default Home;
