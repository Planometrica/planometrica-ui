/**
 * Planometrica Icon System
 * ========================
 *
 * Centralized icon registry for all Planometrica products.
 * All icons are re-exported from lucide-react with optional
 * domain-specific semantic aliases.
 *
 * Usage:
 *   import { WindowIcon, DoorIcon, Check, Plus } from '@planometrica/ui'
 *
 * Semantic aliases provide domain context for architectural icons,
 * making code more readable and enabling single-point replacement.
 *
 * @module icons
 */

// =============================================================================
// Type
// =============================================================================

export type { LucideIcon, LucideProps } from 'lucide-react'

// =============================================================================
// Domain Icons — Architecture & CAD
// =============================================================================
// Semantic aliases for icons used in floor plan editor, navigator, and toolbars.
// Changing the mapping here updates the icon across all products.

// Building elements
export { Grid2x2 as WindowIcon } from 'lucide-react'
export { DoorOpen as DoorIcon } from 'lucide-react'
export { Square as WallIcon } from 'lucide-react'
export { Home as RoomIcon } from 'lucide-react'
export { BoxSelect as OpeningIcon } from 'lucide-react'
export { TrendingUp as StairsIcon } from 'lucide-react'
export { Circle as ColumnIcon } from 'lucide-react'
export { Cylinder as FoundationIcon } from 'lucide-react'
export { Ruler as MeasureIcon } from 'lucide-react'
export { MousePointer2 as SelectIcon } from 'lucide-react'

// MEP (Mechanical, Electrical, Plumbing)
export { Wind as VentilationIcon } from 'lucide-react'
export { Zap as ElectricalIcon } from 'lucide-react'
export { Droplet as WaterIcon } from 'lucide-react'
export { Waves as SewerageIcon } from 'lucide-react'
export { Flame as HeatingIcon } from 'lucide-react'
export { Snowflake as CoolingIcon } from 'lucide-react'

// Project & building
export { Building2 as BuildingIcon } from 'lucide-react'
export { Layers as FloorIcon } from 'lucide-react'
export { Palette as MaterialIcon } from 'lucide-react'
export { Paintbrush as FinishingIcon } from 'lucide-react'
export { MapPin as PlotIcon } from 'lucide-react'
export { Sparkles as AiIcon } from 'lucide-react'

// =============================================================================
// Common Icons — UI / Actions / Navigation
// =============================================================================
// Direct re-exports without aliases. Used across all products.

export {
  // Actions
  Check,
  Plus,
  Minus,
  X,
  Save,
  Send,
  Copy,
  Download,
  Upload,
  Trash2,
  Pencil,
  Search,
  RefreshCw,
  RotateCcw,
  RotateCw,

  // Navigation
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Menu,
  LogOut,
  ExternalLink,

  // Status & feedback
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  CheckCircle2,
  HelpCircle,
  Info,
  Loader2,

  // Content & documents
  FileText,
  FileCheck,
  FileDown,
  FileUp,
  BookOpen,

  // Communication
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,

  // Data & analytics
  BarChart3,
  Calculator,
  Printer,

  // Layout & view
  Eye,
  EyeOff,
  Maximize2,
  PanelLeft,
  LayoutGrid,
  Boxes,

  // User
  User,
  Users,
  Lock,
  Shield,
  ShieldCheck,

  // Finance
  CreditCard,
  Banknote,

  // Time
  Calendar,
  Clock,

  // Media
  Camera,
  Image,
  Images,
  Video,

  // Misc
  Bot,
  Brain,
  Folder,
  Heart,
  Rocket,
  Settings,
  Star,
  Wand2,

  // Also export the raw icons that have aliases (for direct access)
  Grid2x2,
  DoorOpen,
  Square,
  Home,
  BoxSelect,
  TrendingUp,
  Circle,
  Cylinder,
  Ruler,
  MousePointer2,
  Wind,
  Zap,
  Droplet,
  Waves,
  Flame,
  Snowflake,
  Building2,
  Layers,
  Palette,
  Paintbrush,
  MapPin,
  Sparkles,
} from 'lucide-react'
