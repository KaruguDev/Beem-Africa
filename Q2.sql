/*Question 1*/
SELECT o.order_id, o.user_id, u.campaign_id, o.total FROM orders AS o
JOIN users AS u ON o.user_id=u.user_id
JOIN campaigns c on u.campaign_id = c.campaign_id
WHERE u.campaign_id = 1 and u.user_id = 2
ORDER BY o.total DESC LIMIT 3

/*Question 2*/
SELECT u.campaign_id, SUM(o.total) AS total_campaigns_cost FROM orders AS o
JOIN users AS u ON o.user_id=u.user_id
JOIN campaigns c on u.campaign_id = c.campaign_id
GROUP BY u.campaign_id
ORDER BY total_campaigns_cost DESC LIMIT 3