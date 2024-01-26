import React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items, ...rest }) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;

  // crappy hardcoded fix to change sidebar item order and titles
  if (hasChildren) {
    switch (items[0].label) {
      case 'blank-scroll-guide': // guides
        items[0] = { items:[], label: 'blank-scroll-guide', title: 'Blank Scroll', url: '/guides/blank-scroll-guide'};
        items[1] = { items:[], label: 'rescue-rewards', title: 'Rescue Rewards', url: '/guides/rescue-rewards'};
        break;
      case 'armbands': // items
        items[0] = { items:[], label: 'price-chart', title: 'Price Chart', url: '/items/price-chart'};
        items[1] = { items:[], label: 'weapons', title: 'Weapons', url: '/items/weapons'};
        items[2] = { items:[], label: 'shields', title: 'Shields', url: '/items/shields'};
        items[3] = { items:[], label: 'armbands', title: 'Armbands', url: '/items/armbands'};
        items[4] = { items:[], label: 'herbs', title: 'Herbs', url: '/items/herbs'};
        items[5] = { items:[], label: 'staves', title: 'Staves', url: '/items/staves'};
        items[6] = { items:[], label: 'scrolls', title: 'Scrolls', url: '/items/scrolls'};
        items[7] = { items:[], label: 'jars', title: 'Jars', url: '/items/jars'};
        items[8] = { items:[], label: 'food', title: 'Food', url: '/items/food'};
        items[9] = { items:[], label: 'monster-meat', title: 'Meat', url: '/items/monster-meat'};
        items[10] = { items:[], label: 'projectiles', title: 'Projectiles', url: '/items/projectiles'};
        break;
      case 'allies': // system
        items[0] = { items:[], label: 'meld-abilities', title: 'Meld Abilities', url: '/system/meld-abilities'};
        items[1] = { items:[], label: 'monsters', title: 'Monsters', url: '/system/monsters'};
        items[2] = { items:[], label: 'traps', title: 'Traps', url: '/system/traps'};
        items[3] = { items:[], label: 'allies', title: 'Allies', url: '/system/allies'};
        items[4] = { items:[], label: 'npcs', title: 'NPCs', url: '/system/npcs'};
        items[5] = { items:[], label: 'side-quests', title: 'Side Quests', url: '/system/side-quests'};
        items[6] = { items:[], label: 'villages', title: 'Villages', url: '/system/villages'};
        items[7] = { items:[], label: 'status-conditions', title: 'Status', url: '/system/status-conditions'};
        break;
      case 'ceremonial-cave': // dungeons
        items[0] = { items:[], label: 'road-to-the-hamlet', title: 'Road to Hamlet', url: '/dungeons/road-to-the-hamlet'};
        items[1] = { items:[], label: 'table-mountain', title: 'Table Mountain', url: '/dungeons/table-mountain'};
        items[2] = { items:[], label: 'tainted-path', title: 'Tainted Path', url: '/dungeons/tainted-path'};
        items[3] = { items:[], label: 'ceremonial-cave', title: 'Ceremonial', url: '/dungeons/ceremonial-cave'};
        items[4] = { items:[], label: 'ravine-of-the-dead', title: 'Ravine of Dead', url: '/dungeons/ravine-of-the-dead'};
        items[5] = { items:[], label: 'kitchen-god', title: 'Kitchen God', url: '/dungeons/kitchen-god'};
        items[6] = { items:[], label: 'scroll-cave', title: 'Scroll Cave', url: '/dungeons/scroll-cave'};
        items[7] = { items:[], label: 'fays-final-puzzle', title: 'Final Puzzle', url: '/dungeons/fays-final-puzzle'};
        break;
      case 'cheat-codes': // other
        items[0] = { items:[], label: 'cheat-codes', title: 'Cheat Codes', url: '/other/cheat-codes'};
        items[1] = { items:[], label: 'experience-points', title: 'Exp Table', url: '/other/experience-points'};
        items[2] = { items:[], label: 'damage', title: 'Damage', url: '/other/damage'};
        break;
      default:
        // do nothing
    }
  }

  return (
    <li className={calculatedClassName}>
      {title && (
        <Link to={url}>
          {title}
          {!config.sidebar.frontLine && title && hasChildren ? (
            <button onClick={collapse} aria-label="collapse" className="collapser">
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : null}
        </Link>
      )}

      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
