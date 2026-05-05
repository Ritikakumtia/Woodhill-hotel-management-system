import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import './style.css';

function Review() {
    const [index, setIndex] = useState(0);
    const { id, name, job, image, text } = people[index];
    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    return (
        <main>
            <section className="mt-8 ">
                
                <article className="review w-[70vw] md:w-[30vw]">
                    {/* <div className="img-container">
                        <img src={image} alt={name} className="person-img" />
                        <span className="quote-icon">
                            <FaQuoteRight />
                        </span>
                    </div> */}
                    <h4 className="author text-slate-700 font-bold mt-2">{name}</h4>
                    <p className="info mt-4">{text}</p>
                    <div className="button-container">
                        <button className="prev-btn" onClick={prevPerson}>
                            <FaChevronLeft />
                        </button>
                        <button className="next-btn" onClick={nextPerson}>
                            <FaChevronRight />
                        </button>
                    </div>
                </article>
            </section>

        </main>
    );
}

export default Review;