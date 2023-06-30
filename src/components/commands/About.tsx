import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Reyansh Kharga</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a DevOps and Site Reliability Engineer</HighlightAlt> based in Hyderabad,
        India.
      </p>
      <p>
        I am passionate about DevOps, Kubernetes, Microservices, public cloud such as AWS, GCP, and Azure. <br />
      <p>
      <br />
      <HighlightSpan>Areas of Expertise:</HighlightSpan><br />
      AWS, GCP, Terraform, Kubernetes, Python, Microservices, Service Mesh (Istio), CI/CD, Prometheus, Grafana.
      </p>
      </p>
    </AboutWrapper>
  );
};

export default About;
