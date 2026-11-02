import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Eye, Layers } from 'lucide-react';
import { GithubIcon } from '../../components/common/Icons';
import type { Project } from '../../types';
import { Badge } from '../../components/ui/Badge';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const { t } = useTranslation();

  // Status badge variant
  const getStatusVariant = (status: Project['status']) => {
    switch (status) {
      case 'production':
        return 'success';
      case 'research':
        return 'cyan';
      case 'completed':
        return 'blue';
      default:
        return 'amber';
    }
  };

  // Modern Graphic Visual Representations
  const renderVisualMockup = () => {
    switch (project.id) {
      case 'erapor':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 to-emerald-950/40 p-4 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                SD Patra Dharma 3 Balikpapan
              </span>
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                E-Rapor v2.4
              </span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="h-3 w-3/4 bg-emerald-400/20 rounded" />
              <div className="h-3 w-1/2 bg-emerald-400/30 rounded" />
              <div className="flex gap-2 pt-2">
                <div className="h-8 w-20 bg-emerald-500/10 border border-emerald-500/30 rounded flex items-center justify-center text-[10px] text-emerald-300 font-mono">
                  Tahfidz Juz 30
                </div>
                <div className="h-8 w-24 bg-emerald-500/10 border border-emerald-500/30 rounded flex items-center justify-center text-[10px] text-emerald-300 font-mono">
                  Nilai Keagamaan
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>Database: MySQL</span>
              <span className="text-emerald-400">Status: Deployed &amp; Active</span>
            </div>
          </div>
        );

      case 'ar_routing':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 to-cyan-950/40 p-4 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
              <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                AR Interactive Lens
              </span>
              <span className="text-[10px] font-mono bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded">
                Unity 3D
              </span>
            </div>
            <div className="relative my-auto flex items-center justify-center">
              <div className="w-24 h-24 rounded-2xl border-2 border-dashed border-cyan-400/40 flex items-center justify-center relative animate-pulse-subtle">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 border border-cyan-400 flex flex-col items-center justify-center text-cyan-300 text-[10px] font-mono shadow-lg shadow-cyan-500/20">
                  <Layers className="w-5 h-5 mb-0.5" />
                  Router 3D
                </div>
              </div>
              <div className="absolute right-6 text-[10px] font-mono text-cyan-400 bg-slate-900/80 px-2 py-1 rounded border border-cyan-500/30">
                Hop #2: FastEthernet0/1
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>Target: Cisco Topology</span>
              <span className="text-cyan-400">Research Prototype</span>
            </div>
          </div>
        );

      case 'school_scheduling':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 to-blue-950/40 p-4 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-blue-500/20 pb-2">
              <span className="text-[11px] font-mono text-blue-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Scheduling Engine
              </span>
              <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                Matrix v1.0
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 my-auto">
              <div className="p-1 bg-blue-500/10 border border-blue-500/30 rounded text-[9px] text-center font-mono text-blue-300">
                Senin
              </div>
              <div className="p-1 bg-blue-500/10 border border-blue-500/30 rounded text-[9px] text-center font-mono text-blue-300">
                Selasa
              </div>
              <div className="p-1 bg-blue-500/10 border border-blue-500/30 rounded text-[9px] text-center font-mono text-blue-300">
                Rabu
              </div>
              <div className="p-1 bg-blue-500/10 border border-blue-500/30 rounded text-[9px] text-center font-mono text-blue-300">
                Kamis
              </div>
              <div className="col-span-2 p-1.5 bg-blue-600/20 border border-blue-400/40 rounded text-[10px] font-mono text-white text-center">
                TIK (Lab 1) - 08:00
              </div>
              <div className="col-span-2 p-1.5 bg-indigo-600/20 border border-indigo-400/40 rounded text-[10px] font-mono text-white text-center">
                Matematika - 09:30
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>Collision Rate: 0%</span>
              <span className="text-blue-400">Automated Optimizer</span>
            </div>
          </div>
        );

      case 'network_lab':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 to-indigo-950/40 p-4 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-indigo-500/20 pb-2">
              <span className="text-[11px] font-mono text-indigo-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                Network Rack Topology
              </span>
              <span className="text-[10px] font-mono bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded">
                MikroTik RouterOS
              </span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="h-6 rounded bg-slate-800/90 border border-indigo-500/30 flex items-center justify-between px-3 text-[10px] font-mono text-slate-300">
                <span>[GW] 192.168.10.1/24 (VLAN 10 - Admin)</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="h-6 rounded bg-slate-800/90 border border-indigo-500/30 flex items-center justify-between px-3 text-[10px] font-mono text-slate-300">
                <span>[LAB] 192.168.20.1/24 (VLAN 20 - Student)</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>Server: Linux Ubuntu</span>
              <span className="text-indigo-400">QoS Bandwidth: Active</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="rounded-2xl glass-card border border-slate-800/80 light:border-slate-200 overflow-hidden flex flex-col justify-between hover:border-brand-blue/50 transition-all duration-300 group">
      <div>
        {/* Visual Mockup Header */}
        <div className="relative border-b border-slate-800/80 light:border-slate-200">
          {renderVisualMockup()}

          {/* Floating Status Badge */}
          <div className="absolute top-3 right-3 z-10">
            <Badge variant={getStatusVariant(project.status)}>
              {t(project.statusLabelKey)}
            </Badge>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-brand-cyan tracking-wide uppercase">
              {project.role} &bull; {project.period}
            </span>
            <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-brand-electric transition-colors leading-snug">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-slate-400 light:text-slate-600 line-clamp-3 leading-relaxed">
            {t(project.descriptionKey)}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.slice(0, 4).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-500">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 mt-auto border-t border-slate-800/60 light:border-slate-200 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-electric light:text-brand-blue hover:text-brand-cyan transition-colors"
        >
          <Eye className="w-4 h-4" />
          <span>{t('projects.view_details')}</span>
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-900 hover:bg-slate-800/50 light:hover:bg-slate-100 transition-colors"
              aria-label="View on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-brand-cyan light:text-slate-600 light:hover:text-brand-blue hover:bg-slate-800/50 light:hover:bg-slate-100 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
