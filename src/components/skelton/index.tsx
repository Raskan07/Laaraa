import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    )
  }


 
  export function SkeletonCard() {
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    )
  }

  export function SkeletonImage() {
    return (
      <div className="flex flex-col ">
        <Skeleton className="h-[75vh] w-[100%] rounded-md" />
      </div>
    )
  }


  export function SkeletonRow() {
    return (
      <div className="flex flex-col gap-2 ">
        <Skeleton className="h-[10vh] w-[70%] rounded-md" />
        <Skeleton className="h-[5vh] w-[40%] rounded-md" />
        <Skeleton className="h-[5vh] w-[30%] rounded-md" />
      </div>
    )
  }