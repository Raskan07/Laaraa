import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
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
  );
}

export function SkeletonImage() {
  return (
    <div className="flex flex-col ">
      <Skeleton className="md:h-[75vh] h-[50vh] w-[100%] rounded-md" />
    </div>
  );
}

export function SkeletonRow() {
  return (
    <div className="flex flex-col gap-2 ">
      <Skeleton className="h-[10vh] w-[70%] rounded-md" />
      <Skeleton className="md:h-[5vh] h-[7px] w-[40%] rounded-md" />
      <Skeleton className="md:h-[5vh] h-[4px] w-[30%] rounded-md" />
    </div>
  );
}

export function SkeletonMyTripsCard() {
  return (
    <div className="flex flex-row gap-2 mt-[30px] w-full items-start ">
      <Skeleton className="md:h-[200px] h-[100px] md:w-[200px] w-full rounded-md" />
      <div className="md:flex flex-col  w-full gap-2 hidden  ">
        <Skeleton className="md:h-[5vh] m-4 h-[7px] w-[40%] rounded-md" />
        <Skeleton className="md:h-[5vh] m-4 h-[4px] w-[30%] rounded-md" />
      </div>
    </div>
  );
}
