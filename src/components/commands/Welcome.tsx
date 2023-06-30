import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
+-+-+-+-+-+-+-+ +-+-+-+-+-+-+
|R|E|Y|A|N|S|H| |K|H|A|R|G|A|
+-+-+-+-+-+-+-+ +-+-+-+-+-+-+
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
+-+-+-+-+-+-+-+ +-+-+-+-+-+-+
|R|E|Y|A|N|S|H| |K|H|A|R|G|A|
+-+-+-+-+-+-+-+ +-+-+-+-+-+-+
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio.</div>
        <Seperator>----</Seperator>
        {/* <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div> */}
        {/* <Seperator>----</Seperator> */}
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
        <Seperator></Seperator>
      </div>
      {/* <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div> */}
    </HeroContainer>
  );
};

export default Welcome;
