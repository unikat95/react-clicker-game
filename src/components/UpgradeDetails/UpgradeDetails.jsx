import React from "react";

export default function UpgradeDetails({
  canUpgrade,
  building,
  wood,
  woodIcon,
  stone,
  stoneIcon,
  toolLevel,
  toolDmg,
  toolDmgMax,
}) {
  return (
    <div className="building">
      {!canUpgrade ? (
        <>
          <div className="building__name">
            {building.name} lv.{building.level}
          </div>
          <div className="building__container">
            <div className="building__container__row--title">Next upgrade:</div>
            <div className="building__container__row__upgrade">
              <div>
                <span>Axe level: {toolLevel}</span>
                <span className="gold"> {"->"} </span>
                <span>
                  <strong>{toolLevel + 1}</strong>
                </span>
              </div>
              <div className="building__container__row">
                <div>
                  <span>
                    Damage: {toolDmg}-{toolDmgMax}
                  </span>
                  <span className="gold"> {"->"} </span>
                  <span>
                    <strong>
                      {Math.floor(toolDmg + 2)}-{Math.floor(toolDmgMax + 2)}
                    </strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="building__container__row--title">Upgrade cost:</div>
            <div className="building__container__row__cost">
              <div>
                <span>
                  {wood < building.woodCost ? (
                    <strong>{wood}</strong>
                  ) : (
                    `${wood}`
                  )}
                  /{building.woodCost}
                  <span>{woodIcon}</span>
                </span>
              </div>
              <div>
                <span>
                  {stone < building.stoneCost ? (
                    <strong>{stone}</strong>
                  ) : (
                    `${stone}`
                  )}
                  /{building.stoneCost}
                </span>
                <span>{stoneIcon}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="building__upgrade">
          <p>Upgrading...</p>
        </div>
      )}
    </div>
  );
}
