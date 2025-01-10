import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["web Developer", "Web Designer", "Full-Stack Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // 如果是删除状态，加快删除速度
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    //如果不是删除状态且显示完整文本
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true); // 切换到删除状态
      // setIndex((prevIndex) => prevIndex - 1);
      setDelta(period); // 设置删除前的停顿时间
      // 如果是删除状态且已删除完
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1); // 移到下一个文本
      // setIndex(1);
      setDelta(500); // 重置打字速度
    } else {
      // setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1>
                      {`Hi I'm Fei Xue `}
                      <span className="wrap">{text}</span>
                    </h1>
                    <p>
                      A passionate software developer focused on building
                      efficient and scalable applications.
                    </p>
                    <div className="banner-btns">
                      <a href="#connect">
                        <button onClick={() => console.log("connect")}>
                          Let's connect
                          <ArrowRightCircle size={25} />
                        </button>
                      </a>
                      <a href="/resume.pdf" download>
                        <button className="resume-btn">
                          Download Resume
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="bi bi-download"
                            viewBox="0 0 16 16"
                          >
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Headder Img" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Banner;
