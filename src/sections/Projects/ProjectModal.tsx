import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, CheckCircle2, Calendar } from 'lucide-react';
import { GithubIcon } from '../../components/common/Icons';
import type { Project } from '../../types';
import { Modal } from '../../components/ui/Modal';
import { Badge } from '../../components/ui/Badge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useTranslation();

  if (!project) return null;

  const fullDescKey = `projects.items.${project.id}.full_desc`;
  const featuresList = t(`projects.items.${project.id}.features`, { returnObjects: true }) as string[] || [];

  return (
    <Modal isOpen={!!project} onClose={onClose} title={project.title}>
      <div className="space-y-6">
        {/* Meta Info Bar */}
        <div className="flex flex-wrap items-center gap-3 pb-4 border-b border-slate-800 light:border-slate-200 text-xs font-mono">
          <span className="flex items-center gap-1.5 text-brand-cyan">
            <Calendar className="w-3.5 h-3.5" />
            {project.period}
          </span>
          <span className="text-slate-600">&bull;</span>
          <span className="text-slate-400 light:text-slate-600">
            Peran: <strong className="text-white light:text-slate-900">{project.role}</strong>
          </span>
          <span className="text-slate-600">&bull;</span>
          <Badge variant="cyan">
            {t(project.statusLabelKey)}
          </Badge>
        </div>

        {/* Overview Section */}
        <div className="space-y-2">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 light:text-slate-500 font-semibold">
            {t('projects.modal_overview')}
          </h4>
          <p className="text-sm sm:text-base text-slate-300 light:text-slate-700 leading-relaxed">
            {t(fullDescKey)}
          </p>
        </div>

        {/* Key Features */}
        {Array.isArray(featuresList) && featuresList.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 light:text-slate-500 font-semibold">
              {t('projects.modal_key_features')}
            </h4>
            <div className="space-y-2">
              {featuresList.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 light:text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="space-y-3">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 light:text-slate-500 font-semibold">
            {t('projects.modal_tech_stack')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 light:bg-slate-100 text-slate-200 light:text-slate-800 border border-slate-700 light:border-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-800 light:border-slate-200 flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium bg-slate-800 light:bg-slate-200 hover:bg-slate-700 light:hover:bg-slate-300 text-white light:text-slate-900 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>{t('projects.btn_github')}</span>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium bg-brand-blue hover:bg-blue-600 text-white shadow-md shadow-brand-blue/30 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{t('projects.btn_live')}</span>
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};
