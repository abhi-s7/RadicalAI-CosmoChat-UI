import React, { useContext, useEffect, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';
import { ChatContext } from '../../context/ChatContext';
import './Dashboard.css';

// Register Chart.js components
Chart.register(...registerables);

const Dashboard = () => {
  const { sessions } = useContext(ChatContext);
  const [dailyActivity, setDailyActivity] = useState({
    labels: [],
    datasets: []
  });
  const [messageDistribution, setMessageDistribution] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    if (sessions && sessions.length > 0) {
      // Process data to extract metrics
      const activityData = sessions.reduce((acc, session) => {
        const date = new Date(session.date).toLocaleDateString();
        acc[date] = (acc[date] || 0) + session.messages.length;
        return acc;
      }, {});

      const distributionData = sessions.reduce((acc, session) => {
        session.messages.forEach(message => {
          acc[message.type] = (acc[message.type] || 0) + 1;
        });
        return acc;
      }, {});

      setDailyActivity({
        labels: Object.keys(activityData),
        datasets: [{
          label: 'Messages per Day',
          data: Object.values(activityData),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      });

      setMessageDistribution({
        labels: Object.keys(distributionData),
        datasets: [{
          data: Object.values(distributionData),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
      });
    }
  }, [sessions]);

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Messages',
        },
        beginAtZero: true,
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="dashboard">
      <h2>Activity Dashboard</h2>
      <div className="charts-container">
        {dailyActivity.labels.length > 0 && (
          <div className="chart-wrapper">
            <h3>Daily Activity</h3>
            <div className="chart-content">
              <Line data={dailyActivity} options={lineOptions} />
            </div>
          </div>
        )}
        {messageDistribution.labels.length > 0 && (
          <div className="chart-wrapper">
            <h3>Message Distribution</h3>
            <div className="chart-content">
              <Pie data={messageDistribution} options={pieOptions} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
