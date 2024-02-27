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
        break;
      case 'bracelets': // items
        items[0] = { items:[], label: 'price-chart', title: 'Price Chart', url: '/items/price-chart'};
        items[1] = { items:[], label: 'weapons', title: 'Weapons', url: '/items/weapons'};
        items[2] = { items:[], label: 'shields', title: 'Shields', url: '/items/shields'};
        items[3] = { items:[], label: 'bracelets', title: 'Bracelets', url: '/items/bracelets'};
        items[4] = { items:[], label: 'grass', title: 'Grass', url: '/items/grass'};
        items[5] = { items:[], label: 'staves', title: 'Staves', url: '/items/staves'};
        items[6] = { items:[], label: 'scrolls', title: 'Scrolls', url: '/items/scrolls'};
        items[7] = { items:[], label: 'pots', title: 'Pots', url: '/items/pots'};
        items[8] = { items:[], label: 'incense', title: 'Incense', url: '/items/incense'};
        items[9] = { items:[], label: 'projectiles', title: 'Projectiles', url: '/items/projectiles'};
        items[10] = { items:[], label: 'peach-bun', title: 'Peach Bun', url: '/items/peach-bun'};
        items[11] = { items:[], label: 'food', title: 'Food', url: '/items/food'};
        break;
      case 'companions': // system
        items[0] = { items:[], label: 'synthesis-runes', title: 'Runes', url: '/system/synthesis-runes'};
        items[1] = { items:[], label: 'monsters', title: 'Monsters', url: '/system/monsters'};
        items[2] = { items:[], label: 'traps', title: 'Traps', url: '/system/traps'};
        items[3] = { items:[], label: 'companions', title: 'Companions', url: '/system/companions'};
        items[4] = { items:[], label: 'roamers', title: 'Roamers', url: '/system/roamers'};
        items[5] = { items:[], label: 'side-quests', title: 'Side Quests', url: '/system/side-quests'};
        items[6] = { items:[], label: 'villages', title: 'Villages', url: '/system/villages'};
        items[7] = { items:[], label: 'status-conditions', title: 'Status', url: '/system/status-conditions'};
        break;
      case 'behemoth-rush': // dungeons
        items[0] = { items:[], label: 'serpentcoil-island', title: 'Serpentcoil Isle', url: '/dungeons/serpentcoil-island'};
        items[1] = { items:[], label: 'secluded-path', title: 'Secluded Path', url: '/dungeons/secluded-path'};
        items[2] = { items:[], label: 'ghost-ship', title: 'Ghost Ship', url: '/dungeons/ghost-ship'};
        items[3] = { items:[], label: 'golden-highway', title: 'Gold Highway', url: '/dungeons/golden-highway'};
        items[4] = { items:[], label: 'dune-of-batsu', title: 'Dune of Batsu', url: '/dungeons/dune-of-batsu'};
        items[5] = { items:[], label: 'cavern-of-suiryu', title: 'Cave of Suiryu', url: '/dungeons/cavern-of-suiryu'};
        items[6] = { items:[], label: 'yamakagashi-pass', title: 'Yamakagashi', url: '/dungeons/yamakagashi-pass'};
        items[7] = { items:[], label: 'kiki-island', title: 'Kiki Island', url: '/dungeons/kiki-island'};
        items[8] = { items:[], label: 'training-path-of-inference', title: 'Inference', url: '/dungeons/training-path-of-inference'};
        items[9] = { items:[], label: 'training-path-of-extra-inference', title: 'Ex. Inference', url: '/dungeons/training-path-of-extra-inference'};
        items[10] = { items:[], label: 'peach-dungeon', title: 'Peach', url: '/dungeons/peach-dungeon'};
        items[11] = { items:[], label: 'sumo-dungeon', title: 'Sumo', url: '/dungeons/sumo-dungeon'};
        items[12] = { items:[], label: "cat-ching's-divine-will", title: "Cat-Ching's", url: "/dungeons/cat-ching's-divine-will"};
        items[13] = { items:[], label: "trapper's-secret-path", title: "Trapper's Path", url: "/dungeons/trapper's-secret-path"};
        items[14] = { items:[], label: 'training-path-of-gimmicks', title: 'Gimmicks', url: '/dungeons/training-path-of-gimmicks'};
        items[15] = { items:[], label: 'training-path-of-shopping', title: 'Shopping', url: '/dungeons/training-path-of-shopping'};
        items[16] = { items:[], label: 'behemoth-rush', title: 'Behemoth', url: '/dungeons/behemoth-rush'};
        items[17] = { items:[], label: 'sacred-ocean-tunnel', title: 'Sacred Ocean', url: '/dungeons/sacred-ocean-tunnel'};
        items[18] = { items:[], label: 'domain-of-staves-and-scrolls', title: 'Staff & Scroll', url: '/dungeons/domain-of-staves-and-scrolls'};
        items[19] = { items:[], label: 'isle-of-the-mighty', title: 'Isle of Mighty', url: '/dungeons/isle-of-the-mighty'};
        items[20] = { items:[], label: 'heart-of-serpentcoil-island', title: 'Heart of Serp.', url: '/dungeons/heart-of-serpentcoil-island'};
        items[21] = { items:[]};
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
