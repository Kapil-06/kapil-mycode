
import java.util.Scanner;
import java.util.regex.*;

public class EmailValidator {
    // Regular expression to validate email addresses
    private static final String EMAIL_REGEX = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter email addresses separated by commas: ");
        String input = scanner.nextLine();

        // Split the input by commas to get individual email addresses
        String[] emails = input.split(",");

        // Compile the regex pattern
        Pattern pattern = Pattern.compile(EMAIL_REGEX);
        
        for (String email : emails) {
            // Trim any leading or trailing spaces
            email = email.trim();

            // Match the email with the regex pattern
            Matcher matcher = pattern.matcher(email);
            
            if (matcher.matches()) {
                // Convert to lowercase and print
                String lowerCaseEmail = email.toLowerCase();
            
                System.out.println(lowerCaseEmail+", ");
            } else {
                //System.out.println("Invalid Email: " + email);
            }
        }

        scanner.close();
    }
}
