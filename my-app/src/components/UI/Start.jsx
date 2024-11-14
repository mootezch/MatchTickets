import  styled  from "styled-components";
import   { start }  from "../../data"
import StartItem from "./StartItem";


const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
`;


const Start = () => {
  return (
      <Container>
        {start.map(item=>(
          <StartItem item={item} key={item.id} />

        )
          )}

      </Container>
  );
}

export default Start