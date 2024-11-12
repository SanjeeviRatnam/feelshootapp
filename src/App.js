import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage.jsx'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage.jsx'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions.jsx'));
const NewsPage = lazy(() => import('./pages/NewsPage.jsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const SwAppsPage = lazy(() => import('./pages/SwAppsPage.jsx'));
const EntertainmentApps = lazy(() => import('./pages/EntertainmentApps.jsx'));
const CloudServices = lazy(() => import ('./pages/CloudServices.jsx'));
const Consulting = lazy(() => import('./pages/Consulting.jsx'));
const Marketing = lazy(() => import('./pages/Marketing.jsx'));
const ArticlePage = lazy(() => import('./components/news/ArticlePage.jsx'));

function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route
								path="single-project"
								element={<ProjectSingle />}
							/>
							<Route
								path="PrivacyPolicy"
								element={<PrivacyPage />}
							/>
							<Route
								path="TermsAndConditions"
								element={<TermsAndConditions />}
							/>
							<Route
								path="Disclaimer"
								element={<DisclaimerPage />}
							/>
							<Route path="about" element={<About />} />
							<Route path="blog" element={<BlogPage />} />
							<Route path="news" element={<NewsPage />} />
							<Route path="article" element={<ArticlePage />} />
							<Route path="contact" element={<Contact />} />
							<Route path="services" element={<ServicesPage />} />
							<Route path="softwareApps" element={<SwAppsPage />} />
							<Route path="entertainmentApps" element={<EntertainmentApps />} />
							<Route path="cloudservices" element={<CloudServices />} />
							<Route path="consulting" element={<Consulting />} />
							<Route path="marketing" element={<Marketing />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
