import logo from "../../assets/logo.svg";
import { OctagonAlert, Bell, ChevronRight } from 'lucide-react';
import './style.css'
import { MetricsCard } from "../../components/MetricsCard";
import { ButtonWithIcon } from "../../components/ButtonWithIcon";
import { useEffect, useState } from "react";
import { fetchData } from "../../services/api";

interface StatsProps {
    activeAlerts: number

    citizens: number

    totalAlerts: number
}

interface AlertsProps {
    id: 0,
    title: string,
    message: string,
    isActive: true,
    //severity: EMERGENCIA,
    city: string,
    province: string
}

export function Home() {
    const [stats, setStats] = useState<StatsProps | null>(null);
    const [alerts, setAlerts] = useState<AlertsProps[]>([]);

    useEffect(() => {
        // fetchData<StatsProps>('/users/stats').then(response => {
        //     setStats(response);
        // });
        Promise.all([
            fetchData<StatsProps>('/users/stats'), fetchData<AlertsProps[]>('/alerts')]).then(([stats, alerts]) =>{
            setStats(stats);
            setAlerts(alerts);
        })

    }, []);

    return (

        <div id="home-page">

            <header>
                <img src={logo} alt="Logo Beprepared" />
                <ButtonWithIcon text="Alertar" Icon={OctagonAlert} />
            </header>

            <div className="metrics">
                <MetricsCard title="Cadastros" total={stats?  stats.citizens : 0} last={stats?  stats.citizens : 0} />
                <MetricsCard title="Alertas Activos" total={stats?  stats.activeAlerts : 0} last={stats?  stats.activeAlerts : 0} />
                <MetricsCard title="Alertas Totais" total={stats?  stats.totalAlerts : 0} last={stats?  stats.totalAlerts : 0} />
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
                        {
                            alerts.map((alert) => (
                                <tr key={alert.id}>
                                    <td>
                                        {alert.message}
                                    </td>
                                    <td>0</td>
                                    <td>{alert.province} - {alert.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>

                <aside>
                    <header>
                        <Bell size={24} color="#000" />
                        <h2>Notificacoes</h2>
                        <span>0</span>
                    </header>
                    <ul>
                        {
                    alerts.map((alert) => (
                        <li key={alert.id}>
                            <section>
                                <div className="circle full"></div>
                                <span>821234567</span> | {' '}
                                <span className="message">
                                    Not Implemented Yet
                                </span>
                            </section>
                            <ChevronRight size={12} color="#000" />
                        </li>      
                            ))}
                    </ul>
                </aside>
            </div>
        </div>
    )
}