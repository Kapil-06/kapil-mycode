import java.util.Arrays;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class UniqueMails {
   
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Set<String> box1 = new HashSet<>();
        Set<String> box2 = new HashSet<>();

        // Input for Box 1
        System.out.println("Enter all email IDs for Box 1 (separated by space or comma):");
        String input1 = scanner.nextLine().trim();
        String[] emails1 = input1.split("[ ,]+"); // Split by space or comma
        box1.addAll(Arrays.asList(emails1));

        // Input for Box 2
        System.out.println("Enter all email IDs for Box 2 (separated by space or comma):");
        String input2 = scanner.nextLine().trim();
        String[] emails2 = input2.split("[ ,]+"); // Split by space or comma
        box2.addAll(Arrays.asList(emails2));

        // Remove common emails from Box 2 (emails present in Box 1)
        box2.removeAll(box1);

        // Print the unique emails from Box 2
        System.out.println("\n***********Unique Email IDs in Box 2:*************");
        for (String email : box2) {
            System.out.println(email);
        }

        scanner.close();
    }
}

