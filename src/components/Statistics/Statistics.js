import React from 'react';
import css from "./Statistics.module.css";
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.stat_list}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })).isRequired,

};

export default Statistics;
