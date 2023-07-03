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
______                                  _         _   __ _                                
| ___ \\                                | |       | | / /| |                               
| |_/ /  ___  _   _   __ _  _ __   ___ | |__     | |/ / | |__    __ _  _ __   __ _   __ _ 
|    /  / _ \\| | | | / _\` || '_ \\ / __|| '_ \\    |    \\ | '_ \\  / _\` || '__| / _\` | / _\` |
| |\\ \\ |  __/| |_| || (_| || | | |\\__ \\| | | |   | |\\  \\| | | || (_| || |   | (_| || (_| |
\\_| \\_| \\___| \\__, | \\__,_||_| |_||___/|_| |_|   \\_| \\_/|_| |_| \\__,_||_|    \\__, | \\__,_|
               __/ |                                                          __/ |       
              |___/                                                          |___/ 
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
______                                  _     
| ___ \\                                | |    
| |_/ /  ___  _   _   __ _  _ __   ___ | |__  
|    /  / _ \\| | | | / _' || '_ \\ / __|| '_ \\ 
| |\\ \\ |  __/| |_| || (_| || | | |\\__ \\| | | |
\\_| \\_| \\___| \\__, | \\__,_||_| |_||___/|_| |_|
               __/ |                          
              |___/   
              
 _   __ _                                
| | / /| |                               
| |/ / | |__    __ _  _ __   __ _   __ _ 
|    \\ | '_ \\  / _\` || '__| / _\` | / _\` |
| |\\  \\| | | || (_| || |   | (_| || (_| |
\\_| \\_/|_| |_| \\__,_||_|    \\__, | \\__,_|
                              _/ |       
                            |___/         
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
      <div className="illu-section">
        <PreImg>
          {/* {`
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
         `} */}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
