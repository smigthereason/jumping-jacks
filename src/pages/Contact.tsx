import React from "react";
import "/src/styles/Contact.css";
import Header from "../components/Header";
import LineHead from "../components/LineHead";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "../components/ContactForm";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  content: string[];
}

const Card: React.FC<CardProps> = ({ icon, title, content }) => (
  <div className="card">
    <div className="card-icon">{icon}</div>
    <h2>{title}</h2>
    {content.map((item, index) => (
      <p key={index}>{item}</p>
    ))}
  </div>
);

const Contact: React.FC = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="contact-container">
      <div className="right-section">
        <div
          className="scrollable-container"
          style={{
            height: "auto",
            overflowY: "auto",
            padding: "10px",
          }}
        >
          <Header />
          <div
            className="contact_block"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="0"
          >
            <LineHead title="contact" />
            <div className="section_block">
              <div className="sub_title">
                <h2 className="section_title">
                  Let's get in touch and embark on new endeavors!
                </h2>
              </div>
              <div className="cards-container">
                <Card
                  icon={<LocationIcon />}
                  title="Location"
                  content={[
                    "11 West 53 Street",
                    "New York, NY 10019",
                    "3400 Broadway,",
                    "Oakland, CA 94611",
                  ]}
                />
                <Card
                  icon={<HeartIcon />}
                  title="Follow me"
                  content={["Github", "LinkedIn", "Twitter", "Facebook" ]}
                />
                <Card
                  icon={<RocketIcon />}
                  title="Contact"
                  content={[
                    "+254 707 09 8723",
                    "+254 704 542321",
                    "victor.dmaina@gmail.com",
                    "victor.dmaina@gmail.com",
                  ]}
                />
              </div>
              <div className="form_block">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-section">
        <div className="tag"></div>
      </div>
    </div>
  );
};

// Placeholder icon components
const LocationIcon = () => <div>📍</div>;
const HeartIcon = () => <div>❤️</div>;
const RocketIcon = () => <div>🚀</div>;

export default Contact;
