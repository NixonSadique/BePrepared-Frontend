import './style.css'

interface MetricsCardProps{
    title: string;
    total: number;
    last: number;
}

export function MetricsCard({title, total, last}: MetricsCardProps){
    return <section id='metrics-card-block'>
        <header>
            <h2>{title}</h2>
            <div>
                {total}
            </div>
        </header>
        <span className='details'>Recentes: {last}</span>
        <p>Metricas dos ultimos 28 dias</p>
    </section>
}