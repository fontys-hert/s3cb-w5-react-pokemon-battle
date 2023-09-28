export default function Pokemon({ stats, image }) {

  return (
    <div className="enemy pokemon pokemon--align-end">
      <img className="pokemon__image" src={image}/>
      <div>
        <div className="pokemon__status">
          <div className="status__name">{stats.name} Lv: {stats.lvl}</div>
          <div className="status__health-bar">
            <div className="health-bar__backdrop">
              <div
                className="health-bar__current-health"
                style={{width: '100%'}}
              ></div>
            </div>
          </div>
          <div className="enemyHp status__health">
            <span className="currentHealth">{stats.hp}</span>/
            <span className="maxHealth">{stats.maxHp}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
