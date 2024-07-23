/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Carousel, Modal } from "antd";
import { FaCheckCircle } from "react-icons/fa";
import { formFieldsConfig, formMoodConfig } from "../../utils/constants";
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
    submitAnswers(selectedOptions);
    handleCancel();
  };

  const renderSubmitButton = () =>
    showSubmitButton && (
      <div>
        <Button type="primary" size={"large"} onClick={handleSubmitAnswers}>
          Find My Music
        </Button>
      </div>
    );

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
            {formMoodConfig.map(({background, title, imageLink, bindData}) => (
              <div
                className="question-card-answer-wrapper-img-wrapper"
                style={{
                  background,
                }}
                onClick={handleOnClickEmotionOptions.bind(this, bindData)}
              >
                <img
                  className="answer-img"
                  src={imageLink}
                  alt={title}
                />
                <span className="answer-img-text">{title}</span>
                {selectedOptions[1] === title && renderCheckMark()}
              </div>
            ))}
            {renderSubmitButton()}
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
            {renderSubmitButton()}
          </div>
        ))}
      </Carousel>
    </Modal>
  );
};
