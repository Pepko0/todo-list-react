import Section from "../../../common/Section";
import Container from "../../../common/Section/Container";

const Author = () => (
  <Container>
    <h1>O autorze</h1>
    <Section
      title="Kacper Lewko"
      body={
        <>
          <p>
            Moje zainteresowanie dziedziną informatyki sięga czasów szkoły
            średniej, gdzie rozpocząłem swoją edukację w <strong>Zespole Szkół
            Elektrycznych w Białymstoku</strong>, specjalizując się w kierunku <strong> Technik
            Informatyk</strong>. Od tego momentu nieustannie poszerzam swoją wiedzę i
            umiejętności w dziedzinie IT.
          </p>
          <p>
            Obecnie kontynuuję rozwijanie się w obszarze nowoczesnych
            technologii poprzez studia na renomowanej uczelni, jaką jest
            <strong> Politechnika Białostocka </strong>, na wydziale <strong>Informatyki</strong>. Ponadto, moje
            zaangażowanie w rozwijanie kompetencji obejmuje udział w
            różnorodnych kursach, takich jak: <strong>Tworzenie stron internetowych,
            Tester manualny, Tester automatyzujący</strong> oraz <strong>Tester oprogramowania</strong>.
          </p>
          <p>
            Poza obszarem informatyki, moje pasje obejmują <strong> podróżowanie </strong> oraz <strong> gra
            na gitarze</strong>. Owa różnorodność zainteresowań pozwala mi na holistyczne
            podejście do życia i doskonalenie się zarówno w obszarze naukowym,
            jak i artystycznym.
          </p>
        </>
      }
    />
  </Container>
);
export default Author;
