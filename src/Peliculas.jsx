import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';

function Peliculas() {
  const [modal, setModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const toggle = () => setModal(!modal);

  const movies = [
    { id: 1, title: "Como entrenar a tu dragón", description: "Una comedia de aventuras ambientada en un mundo mítico de fornidos vikingos y dragones que escupen fuego, y basada en el libro de Cressida Cowell. La historia gira en torno a un vikingo adolescente llamado Hipo (JAY BARUCHEL), que vive en Isla Mema, en donde combatir a los dragones es el modo de vida habitual. Las opiniones bastante progresistas del adolescente y su poco convencional sentido del humor no caen muy bien ni a los de su tribu ni a su jefe que además resulta que es Estoico el Vasto (GERARD BUTLER), el padre de Hipo. Cuando a Hipo le apuntan a Entrenamiento con Dragones junto a otros adolescentes vikingos [Astrid (AMERICA FERRERA), Patán Mocoso (JONAH HILL), Patapez (CHRISTOPHER MINTZ-PLASSE), y los gemelos Brusca (KRISTEN WIIG) y Chusco (T.J. MILLER)]. Hipo lo ve como una oportunidad para demostrar que tiene lo que hay que tener para ser un guerrero. Pero cuando se encuentra con un dragón herido (y termina por hacerse su amigo), su mundo se vuelve del revés, y lo que empezó siendo una ocasión para que Hipo demostrase su valía se convierte en un oportunidad para cambiar completamente el rumbo futuro de toda la tribu.También como protagonista está CRAIG FERGUSON como Bocapodrida, el herrero de la tribu e instructor de Entrenamiento con Dragones, quien se da cuenta del potencial que hay en el extraordinario conjunto de aptitudes de Hipo, aunque Estoico en cambio no se dé cuenta." },
    { id: 2, title: "Titanic", description: "Jack es un joven artista que gana un pasaje para viajar a América en el Titanic, el transatlántico más grande y seguro jamás construido. A bordo del buque conoce a Rose, una chica de clase alta que viaja con su madre y su prometido Cal, un millonario engreído a quien solo interesa el prestigio de la familia de su prometida. Jack y Rose se enamoran a pesar de las trabas que ponen la madre de ella y Cal en su relación. Mientras, el lujoso transatlántico se acerca a un inmenso iceberg." },
    { id: 3, title: "Spider-Man", description: "Peter Parker es un tímido estudiante de preparatoria, intelectualmente brillante pero poco hábil socialmente. Durante una visita a un laboratorio de genética de la Universidad de Columbia es mordido por una araña genéticamente modificada. Esto provoca en él un cambio que le otorga poderes sobrehumanos arácnidos: fuerza proporcional a la de una araña, capacidad de adherirse a las paredes, capacidad para segregar y lanzar redes similares a las telarañas por las manos y un sentido arácnido que le advierte de los peligros que le pueden acechar." },
    { id: 4, title: "Shrek", description: "Hace mucho tiempo, en una lejana ciénaga, vivía un ogro llamado Shrek. Un día, su preciada soledad se ve interrumpida por un montón de personajes de cuento de hadas que invaden su casa. Todos fueron desterrados de su reino por el malvado Lord Farquaad. Decidido a devolverles su reino y recuperar la soledad de su ciénaga, Shrek llega a un acuerdo con Lord Farquaad y va a rescatar a la princesa Fiona, la futura esposa del rey. Sin embargo, la princesa esconde un oscuro secreto." },
    { id: 5, title: "Five Nights at Freddy's", description: "Un problemático guardia de seguridad empieza a trabajar en la pizzería Freddy Fazbear's. Mientras pasa su primera noche en el trabajo, se da cuenta de que el turno de noche en Freddy's no será tan fácil de sobrellevar." },
  ];

  const openModal = (movie) => {
    setSelectedMovie(movie);
    toggle();
  };

  return (
    <Container className="my-4">
      <h2>Películas</h2>
      <Row>
        {movies.map((movie) => (
          <Col sm="auto" key={movie.id} className="mb-2">
            <Button color="dark" onClick={() => openModal(movie)}>
              {movie.title}
            </Button>
          </Col>
        ))}
      </Row>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{selectedMovie?.title}</ModalHeader>
        <ModalBody>{selectedMovie?.description}</ModalBody>
      </Modal>
    </Container>
  );
}
export default Peliculas;