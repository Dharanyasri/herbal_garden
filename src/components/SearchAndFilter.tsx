import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { ayushSystems } from "@/data/plants";

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedSystem: string;
  onSystemChange: (value: string) => void;
}

export const SearchAndFilter = ({
  searchTerm,
  onSearchChange,
  selectedSystem,
  onSystemChange,
}: SearchAndFilterProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search medicinal plants..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-card border-herb-primary/20 focus:border-herb-primary"
        />
      </div>
      
      <div className="relative sm:w-64">
        <Filter className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
        <Select value={selectedSystem} onValueChange={onSystemChange}>
          <SelectTrigger className="pl-10 bg-card border-herb-primary/20 focus:border-herb-primary">
            <SelectValue placeholder="Filter by system" />
          </SelectTrigger>
          <SelectContent>
            {ayushSystems.map((system) => (
              <SelectItem key={system} value={system}>
                {system}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};