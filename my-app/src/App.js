import { Container } from "./Container";
import { Welcome } from "./Welcome";

export default function App() {
    return (
        <div>
            <Container title="Info about...">
                    <Welcome name="Giovanni" age={52} />
                    <Welcome name="Antonio" age={17} />
                </Container>
        </div>
    );
}
