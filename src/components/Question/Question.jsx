/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Carousel, Modal } from "antd";
import { FaCheckCircle } from "react-icons/fa";
import { formFieldsConfig } from "../../utils/constants";
import "./styles.scss";

export const Question = (props) => {
  const { setIsModalOpen, isModalOpen, submitAnswers } = props;
  const initialState = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  };
  const [selectedOptions, setSelectedOptions] = useState(initialState);
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  useEffect(() => {
    const isAllOptionSelected = Object.values(selectedOptions).some(
      (option) => option === null
    );
    if (!isAllOptionSelected) {
      setShowSubmitButton(true);
    }
  }, [selectedOptions]);

  useEffect(() => {
    setSelectedOptions(initialState);
  }, [isModalOpen]);

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedOptions(initialState);
    setShowSubmitButton(false);
  };

  const renderCheckMark = () => (
    <div style={{ position: "absolute", top: 0, right: 0 }}>
      <FaCheckCircle size={36} style={{ color: "green" }} />
    </div>
  );

  const handleOnClickEmotionOptions = (payload) => {
    const { index, selected } = payload;
    setSelectedOptions({
      ...selectedOptions,
      [index]: selected,
    });
  };
  
  const handleSubmitAnswers = () => {
    console.log("here--->");
    submitAnswers(selectedOptions);
    handleCancel();
  };

  return (
    <Modal
      title=""
      open={isModalOpen}
      footer={null}
      closable={true}
      centered={true}
      onCancel={handleCancel}
    >
      <Carousel dotPosition={"top"} arrows={true} infinite={false} speed={800}>
        <div className="question-card">
          <h3>How are you feeling right now?</h3>
          <div className="question-card-answer-wrapper">
            <div
              className="question-card-answer-wrapper-img-wrapper"
              style={{
                background: "#DFEBFF",
                //   border: "4px solid rgb(168, 181, 255)",
              }}
              onClick={handleOnClickEmotionOptions.bind(this, {
                index: 1,
                selected: "Happy",
              })}
            >
              <img
                className="answer-img"
                src="./emotion/happy.svg"
                alt="Happy"
              />
              <span className="answer-img-text">Happy</span>
              {selectedOptions[1] === "Happy" && renderCheckMark()}
            </div>
            <div
              className="question-card-answer-wrapper-img-wrapper"
              style={{
                background: "#FFA7BC",
              }}
              onClick={handleOnClickEmotionOptions.bind(this, {
                index: 1,
                selected: "Spectacular",
              })}
            >
              <img
                className="answer-img"
                src="./emotion/spectacular.svg"
                alt="Spectacular"
              />
              <span className="answer-img-text">Spectacular</span>
              {selectedOptions[1] === "Spectacular" && renderCheckMark()}
            </div>
            <div
              className="question-card-answer-wrapper-img-wrapper"
              style={{
                background: "#FDDD6F",
              }}
              onClick={handleOnClickEmotionOptions.bind(this, {
                index: 1,
                selected: "Good",
              })}
            >
              <img className="answer-img" src="./emotion/good.svg" alt="Good" />
              <span className="answer-img-text">Good</span>
              {selectedOptions[1] === "Good" && renderCheckMark()}
            </div>
            <div
              className="question-card-answer-wrapper-img-wrapper"
              style={{
                background: "#A1E7EB",
              }}
              onClick={handleOnClickEmotionOptions.bind(this, {
                index: 1,
                selected: "Sad",
              })}
            >
              <img className="answer-img" src="./emotion/sad.svg" alt="Sad" />
              <span className="answer-img-text">Sad</span>
              {selectedOptions[1] === "Sad" && renderCheckMark()}
            </div>
            <div
              className="question-card-answer-wrapper-img-wrapper"
              style={{
                background: "#8CA4EE",
              }}
              onClick={handleOnClickEmotionOptions.bind(this, {
                index: 1,
                selected: "Upset",
              })}
            >
              <img
                className="answer-img"
                src="./emotion/upset.svg"
                alt="Upset"
              />
              <span className="answer-img-text">Upset</span>
              {selectedOptions[1] === "Upset" && renderCheckMark()}
            </div>
            <div
              className="question-card-answer-wrapper-img-wrapper"
              style={{
                background: "#FF843E",
              }}
              onClick={handleOnClickEmotionOptions.bind(this, {
                index: 1,
                selected: "Angry",
              })}
            >
              <img
                className="answer-img"
                src="./emotion/angry.svg"
                alt="Angry"
              />
              <span className="answer-img-text">Angry</span>
              {selectedOptions[1] === "Angry" && renderCheckMark()}
            </div>
            {showSubmitButton && (
              <Button type="primary" size={"large"}>
                Submit
              </Button>
            )}
          </div>
        </div>
        {formFieldsConfig.map((question, index) => (
          <div className="question-card" key={index}>
            <h3 key={index}>{question.field}</h3>
            <div className="question-card-answer-wrapper">
              {question.values.map((answer) => (
                <div
                  class="card"
                  onClick={handleOnClickEmotionOptions.bind(this, {
                    index: question.questionNo,
                    selected: answer.title,
                  })}
                  key={answer.title}
                >
                  <div class="card-image">
                    <img src={answer.link} alt="" />
                  </div>
                  <div class="card-title">
                    <p>{answer.title}</p>
                  </div>
                  {selectedOptions[question.questionNo] === answer.title &&
                    renderCheckMark()}
                </div>
              ))}
            </div>
            {showSubmitButton && (
              <div>
                <Button type="primary" size={"large"} onClick={handleSubmitAnswers}>
                  Find My Music
                </Button>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </Modal>
  );
};
