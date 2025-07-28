import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Theme, ColorInput, DescriptionInput } from "@shared/schema";

export function useThemes() {
  return useQuery<{ themes: Theme[] }>({
    queryKey: ["/api/themes"],
  });
}

export function useGenerateFromColors() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (colors: ColorInput) => {
      const response = await apiRequest(
        "POST",
        "/api/themes/from-colors",
        colors
      );
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/themes"] });
    },
  });
}

export function useGenerateFromDescription() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (description: DescriptionInput) => {
      const response = await apiRequest(
        "POST",
        "/api/themes/from-description",
        description
      );
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/themes"] });
    },
  });
}
