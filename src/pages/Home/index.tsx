import logo from "../../assets/logo.svg";
import { OctagonAlert } from 'lucide-react';
import './style.css'
import { MetricsCard } from "../../components/MetricsCard";
import { ButtonWithIcon } from "../../components/ButtonWithIcon";

export function Home() {
    return (

        <div id="home-page">

            <header>
                <img src={logo} alt="Logo Beprepared" />
                <ButtonWithIcon text="Alertar" Icon={OctagonAlert} />
            </header>

            <div className="metrics">
                <MetricsCard title="Cadastros" total={420} last={69} />
                <MetricsCard title="Alertas" total={420} last={69} />
                <MetricsCard title="Notificacoes" total={420} last={69} />
            </div>

            <div className="alerts-list">
                <main>
                    <header>
                        <h1>
                            <OctagonAlert size={24} color="#000" />
                            <span>Lista de Alertas</span>
                        </h1>
                        <ButtonWithIcon text="Alertar" Icon={OctagonAlert} size='short' />
                    </header>
                    <table>
                        <thead>
                            <tr>
                                <th>Mensagem</th>
                                <th>Alcance</th>
                                <th>Localizacao</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Nobis, cupiditate eius! Dolores odio est harum vel iure voluptatibus laudantium quas voluptates in.
                                    Necessitatibus eius quis perferendis aut dolore blanditiis maxime.
                                </td>
                                <td>2833</td>
                                <td>Maputo-Matola</td>
                            </tr>
                            <tr>
                                <td>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Nobis, cupiditate eius! Dolores odio est harum vel iure voluptatibus laudantium quas voluptates in.
                                    Necessitatibus eius quis perferendis aut dolore blanditiis maxime.
                                </td>
                                <td>2833</td>
                                <td>Maputo-Matola</td>
                            </tr>
                            <tr>
                                <td>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Nobis, cupiditate eius! Dolores odio est harum vel iure voluptatibus laudantium quas voluptates in.
                                    Necessitatibus eius quis perferendis aut dolore blanditiis maxime.
                                </td>
                                <td>2833</td>
                                <td>Maputo-Matola</td>
                            </tr>
                        </tbody>
                    </table>
                </main>

                <aside>
                    <header>
                        <OctagonAlert size={24} color="#000" />
                        <h2>Notificacoes</h2>
                        <span>4</span>
                    </header>
                    <ul>
                        <li>
                            <section>
                                <span>827793535</span> | {' '}
                                <span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Excepturi ducimus perferendis eius et magni quos,
                                    dolorum corporis deserunt non voluptatem doloremque nemo sed mollitia qui cupiditate dolore.
                                    Iste, veniam. Deleniti!
                                </span>
                            </section>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    )
}