/**
 * Planometrica UI
 * ===============
 *
 * Shared UI components and design tokens for Planometrica platform.
 *
 * @packageDocumentation
 */

// =============================================================================
// Utilities
// =============================================================================
export { cn, formatCurrency, formatNumber, formatArea, formatVolume, formatPercentage } from './lib/utils'

// =============================================================================
// Design Tokens
// =============================================================================
export { colors, hslColors } from './tokens/colors'
export type { ColorToken, BrandColor, LightThemeColor, DarkThemeColor } from './tokens/colors'

export { fonts, textStyles } from './tokens/typography'
export type { FontFamily, FontSize, FontWeight, TextStyle } from './tokens/typography'

// =============================================================================
// Hooks
// =============================================================================
export { useToast, toast } from './hooks/use-toast'
export { useIsMobile } from './hooks/use-mobile'

// =============================================================================
// UI Components
// =============================================================================

// Accordion
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion'

// Alert
export { Alert, AlertTitle, AlertDescription } from './components/ui/alert'

// Alert Dialog
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from './components/ui/alert-dialog'

// Aspect Ratio
export { AspectRatio } from './components/ui/aspect-ratio'

// Avatar
export { Avatar, AvatarImage, AvatarFallback } from './components/ui/avatar'

// Breadcrumb
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './components/ui/breadcrumb'

// Badge
export { Badge, badgeVariants } from './components/ui/badge'
export type { BadgeProps } from './components/ui/badge'

// Button
export { Button, buttonVariants } from './components/ui/button'
export type { ButtonProps } from './components/ui/button'

// Calendar
export { Calendar } from './components/ui/calendar'
export type { CalendarProps } from './components/ui/calendar'

// Carousel
export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './components/ui/carousel'

// Card
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './components/ui/card'

// Chart
export {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
} from './components/ui/chart'

// Checkbox
export { Checkbox } from './components/ui/checkbox'

// Collapsible
export { Collapsible, CollapsibleTrigger, CollapsibleContent } from './components/ui/collapsible'

// Command
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from './components/ui/command'

// Context Menu
export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from './components/ui/context-menu'

// Drawer
export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from './components/ui/drawer'

// Dialog
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './components/ui/dialog'

// Form
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from './components/ui/form'

// Dropdown Menu
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './components/ui/dropdown-menu'

// Hover Card
export { HoverCard, HoverCardTrigger, HoverCardContent } from './components/ui/hover-card'

// Input
export { Input } from './components/ui/input'

// Input OTP
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from './components/ui/input-otp'

// Label
export { Label } from './components/ui/label'

// Menubar
export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
} from './components/ui/menubar'

// Navigation Menu
export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from './components/ui/navigation-menu'

// Pagination
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './components/ui/pagination'

// Popover
export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor } from './components/ui/popover'

// Progress
export { Progress } from './components/ui/progress'

// Radio Group
export { RadioGroup, RadioGroupItem } from './components/ui/radio-group'

// Resizable
export { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './components/ui/resizable'

// Scroll Area
export { ScrollArea, ScrollBar } from './components/ui/scroll-area'

// Select
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from './components/ui/select'

// Separator
export { Separator } from './components/ui/separator'

// Sidebar
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from './components/ui/sidebar'

// Sheet
export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from './components/ui/sheet'

// Skeleton
export { Skeleton } from './components/ui/skeleton'

// Slider
export { Slider } from './components/ui/slider'

// Sonner (Toast notifications)
export { Toaster as Sonner } from './components/ui/sonner'

// Switch
export { Switch } from './components/ui/switch'

// Table
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from './components/ui/table'

// Tabs
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './components/ui/tabs'

// Textarea
export { Textarea } from './components/ui/textarea'

// Toast (Radix-based)
export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from './components/ui/toast'

// Toaster (Radix Toast renderer)
export { Toaster } from './components/ui/toaster'

// Toggle
export { Toggle, toggleVariants } from './components/ui/toggle'

// Toggle Group
export { ToggleGroup, ToggleGroupItem } from './components/ui/toggle-group'

// Tooltip
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './components/ui/tooltip'

// =============================================================================
// Brand Assets
// =============================================================================

// Planometrica Logo
export { PlanometricaLogo } from './components/ui/planometrica-logo'
export type { PlanometricaLogoProps, LogoVariant } from './components/ui/planometrica-logo'
