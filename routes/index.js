const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const servicesData = require('../data/services');

const donationNotificationEmail = process.env.DONATION_NOTIFICATION_EMAIL || 'info@agrilinkhub.com';
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT || 587;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
let transporter;

if (smtpHost && smtpUser && smtpPass) {
  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: smtpUser, pass: smtpPass }
  });
}

// Home page
router.get('/', (req, res) => {
  res.render('index', servicesData);
});

// About page
router.get('/about', (req, res) => {
  res.render('about');
});

// Services page
router.get('/services', (req, res) => {
  res.render('services', servicesData);
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact');
});

// Terms & Conditions page
router.get('/terms', (req, res) => {
  res.render('terms');
});

// Privacy Policy page
router.get('/privacy', (req, res) => {
  res.render('privacy');
});

// Site Map page
router.get('/sitemap', (req, res) => {
  res.render('sitemap');
});

// Impact story page
router.get('/impact', (req, res) => {
  res.render('impact');
});

module.exports = router;